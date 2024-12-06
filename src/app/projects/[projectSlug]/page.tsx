"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { fetchReadmeFromGitHub } from "@/lib/github";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import ReactPlayer from "react-player";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

type ProjectFeaturesDetail = {
  [key: string]: {
    name: string;
    description: string;
    image: string[];
    video: string;
    isReadme?: boolean;
    repoUrl?: string;
  };
};

export default function ProjectSlug({ params }: { params: { projectSlug: string } }) {
  const [readmeContent, setReadmeContent] = useState<string | null>(null);

  const project = projectsData.find((p) => p.slug === params.projectSlug);

  useEffect(() => {
    if (project) {
      const readmeFeature = Object.entries(
        project.projectFeaturesDetail as ProjectFeaturesDetail
      ).find(([_, feature]) => feature.isReadme);

      if (readmeFeature?.[1]?.repoUrl) {
        fetchReadmeFromGitHub(readmeFeature[1].repoUrl).then((content) =>
          setReadmeContent(content)
        );
      }
    }
  }, [project]);

  if (!project) {
    return <p className="text-center text-lg text-red-600">Project not found!</p>;
  }

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Project Title */}
        <motion.h1
          className="text-5xl font-extrabold text-center text-gray-800"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {project.title}
        </motion.h1>

        {/* Project Brief */}
        <p className="text-xl text-gray-700 text-center leading-relaxed">
          {project.projectBrief}
        </p>

        {/* Project Features */}
        {Object.entries(project.projectFeaturesDetail as ProjectFeaturesDetail).map(
          ([featureKey, feature], index) => (
            <motion.div
              key={featureKey}
              className={`bg-white p-8 rounded-lg shadow-lg space-y-6 ${
                index % 2 === 0 ? "text-left" : "text-right"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Feature Title */}
              <h2 className="text-3xl font-semibold text-gray-800">{feature.name}</h2>

              {/* Feature Description */}
              <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>

              {/* Feature Images */}
              {feature.image.length > 0 && (
                <div className="flex flex-wrap gap-4 mt-6 justify-center">
                  {feature.image.map((img: string, idx: number) => (
                    <Image
                      key={idx}
                      src={img}
                      alt={`Feature ${idx}`}
                      className="rounded-lg shadow-md"
                      width={300}
                      height={200}
                    />
                  ))}
                </div>
              )}

              {/* README Content */}
              {feature.isReadme && readmeContent && (
                <div className="mt-8 border-t pt-4">
                  <h3 className="text-2xl font-medium text-gray-700 mb-4">
                    Documentation
                  </h3>
                  <ReactMarkdown
                    rehypePlugins={[rehypeRaw]} // Handle raw HTML in Markdown
                    components={{
                      h1: ({ ...props }) => (
                        <h1 className="text-3xl font-bold mt-6 mb-4" {...props} />
                      ),
                      h2: ({ ...props }) => (
                        <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />
                      ),
                      p: ({ children, ...props }) => {
                        const isVideoLink =
                          typeof children[0] === "string" &&
                          ReactPlayer.canPlay(children[0]);

                        if (isVideoLink) {
                          return (
                            <div className="my-6 flex justify-center">
                              <ReactPlayer
                                url={children[0] as string}
                                controls
                                className="rounded-lg shadow-md"
                                width="100%"
                                height="auto"
                              />
                            </div>
                          );
                        }

                        return (
                          <p className="text-gray-600 mb-4 leading-relaxed" {...props}>
                            {children}
                          </p>
                        );
                      },
                      ul: ({ ...props }) => (
                        <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />
                      ),
                      ol: ({ ...props }) => (
                        <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />
                      ),
                      img: ({ src, alt, ...props }) => (
                        <div className="my-6">
                          <Image
                            src={src || ""}
                            alt={alt || ""}
                            className="rounded-lg shadow-md mx-auto"
                            style={{ maxWidth: "100%" }}
                            {...props}
                            width={800}
                            height={600}
                          />
                          {alt && (
                            <p className="text-center text-sm text-gray-500 mt-2 italic">
                              {alt}
                            </p>
                          )}
                        </div>
                      ),
                    }}
                  >
                    {readmeContent}
                  </ReactMarkdown>
                </div>
              )}
            </motion.div>
          )
        )}

        {/* Links */}
        <motion.div
          className="flex justify-center space-x-6 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {project.hostedLink && (
            <Link href={project.hostedLink} target="_blank">
              <AiOutlineLink className="text-3xl text-gray-800 hover:text-gray-600" />
            </Link>
          )}
          {project.githubRepoLink && (
            <Link href={project.githubRepoLink} target="_blank">
              <AiFillGithub className="text-3xl text-gray-800 hover:text-gray-600" />
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}

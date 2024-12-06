import axios from 'axios';

export const fetchReadmeFromGitHub = async (repoUrl: string): Promise<string | null> => {
  try {
    // Convert GitHub URL to API path
    const repoPath = repoUrl.replace('https://github.com/', '');
    const apiUrl = `https://api.github.com/repos/${repoPath}/readme`;

    const response = await axios.get(apiUrl, {
      headers: {
        Accept: 'application/vnd.github.v3.raw', // Fetch raw README content
      },
    });

    return response.data; // Returns raw Markdown content
  } catch (error) {
    console.error('Error fetching README:', error);
    return null; // Handle errors gracefully
  }
};

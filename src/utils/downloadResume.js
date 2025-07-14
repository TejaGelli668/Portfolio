export const downloadResume = () => {
  // Create a link element
  const link = document.createElement('a');
  link.href = '/TejaGelli_Resume.pdf'; // Path to your resume in public folder
  link.download = 'Teja_Gelli_Resume.pdf'; // Name for the downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
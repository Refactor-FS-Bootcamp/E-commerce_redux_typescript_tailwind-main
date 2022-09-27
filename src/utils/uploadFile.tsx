const toBase64 = (file:File) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});  

export const uploadSingleFile = async (file: File) => {

  if (!file) return;
  const downloadURL = await toBase64(file);
  return downloadURL;
};

export const deleteFile = async (fileName: string) => {
  if (!fileName || fileName === 'no-image.png') return;

  };
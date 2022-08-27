const toBase64 = (file: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

export const toBlob = (file: string) => new Promise(async (resolve, reject) => {
    const resp = await fetch(file);
    const blobValue = await resp.blob();
    if(!blobValue)  reject(null);

   resolve(blobValue)
})

export default toBase64
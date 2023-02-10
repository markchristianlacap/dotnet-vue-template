export interface IFileBase64 {
  file: string
  name: string
  contentType: string
}
export const fileToBase64 = (file: File): Promise<IFileBase64> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const base64File: IFileBase64 = {
        file: (reader.result as string).split(',')[1],
        name: file.name,
        contentType: file.type,
      }
      resolve(base64File)
    }
    reader.onerror = error => reject(error)
  })

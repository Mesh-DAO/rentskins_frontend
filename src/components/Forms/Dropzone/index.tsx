import { IconDocumentUpload } from '@/components/Icons/IconDocumentUpload'

interface IProps {
  label?: string
}

export default function FormDropzone({ label }: IProps) {
  return (
    <div className="flex w-full items-center justify-center">
      <label
        htmlFor="dropzone-file"
        className="group flex h-64
        w-full cursor-pointer flex-col items-center justify-center rounded-lg
      border-2 border-dashed border-mesh-color-primary-600 transition-all
      duration-300 hover:border-mesh-color-primary-600/10"
      >
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          <div className="mb-4">
            <IconDocumentUpload />
          </div>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="text-center font-semibold">{label}</span>
          </p>
          <p className="text-center text-xs text-gray-500 dark:text-gray-400">
            Você pode subir arquivos PNG, JPEG ou PDF
          </p>
        </div>
        <div
          className="w-1/3 rounded-lg border-2 border-mesh-color-primary-600 py-3 text-center
          transition-all duration-300 group-hover:border-mesh-color-primary-600/10"
        >
          Enviar Arquivo
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={(event) => console.log(event.target.value)}
        />
      </label>
    </div>
  )
}

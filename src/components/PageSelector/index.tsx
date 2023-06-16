'use client'
import useComponentStore from '@/stores/components.store'
import { ChangeEventHandler, useEffect } from 'react'

interface IProps {
  pages: number
  handleOnChange: ChangeEventHandler<HTMLInputElement>
}

export function PageSelector({ pages, handleOnChange }: IProps) {
  const { pageSelectorIndex, setPageSelectorIndex } = useComponentStore()

  useEffect(() => setPageSelectorIndex(1), [])

  const ceilPage = Math.ceil(pages)

  const renderComponent = () => {
    return Array.from({ length: ceilPage }).map((item, index) => {
      const page = index + 1
      if (
        page >= Number(pageSelectorIndex) - 2 &&
        page <= Number(pageSelectorIndex) + 2
      ) {
        return (
          <nav key={'pageselector-' + page}>
            <input
              type="radio"
              id={'pageselector-' + page}
              name="pageselector"
              className="peer fixed"
              value={Number(index) + 1}
              onChange={handleOnChange}
              defaultChecked={
                // PARA O PRIMEIRO DA LISTA
                (pageSelectorIndex === 1 && index === 0) ||
                // PARA O ÚLTIMO DA LISTA
                (pageSelectorIndex === ceilPage && index === ceilPage - 1)
              }
            />
            <label
              htmlFor={'pageselector-' + page}
              className="text-md w-2 rounded-lg border border-mesh-color-neutral-300 px-3 py-2 text-center
          text-white transition-all duration-300 peer-checked:bg-mesh-color-primary-1200 peer-checked:font-semibold
          peer-checked:text-mesh-color-others-black peer-hover:cursor-pointer"
            >
              {page}
            </label>
          </nav>
        )
      }
      return null
    })
  }
  return (
    <div className="mt-16 flex h-12 select-none items-center justify-center gap-2">
      {pageSelectorIndex >= 4 ? (
        <nav className="flex w-full justify-end">
          <input
            type="radio"
            id={'pageselector-first'}
            name="pageselector"
            className="peer"
            value={1}
            onChange={() => setPageSelectorIndex(1)}
          />
          <label
            htmlFor={'pageselector-first'}
            className="text-md rounded-lg border border-mesh-color-neutral-300 px-3 py-2 text-center
          text-white transition-all duration-500 peer-checked:bg-mesh-color-primary-1200 peer-checked:font-semibold
          peer-checked:text-mesh-color-others-black peer-hover:cursor-pointer"
          >
            1
          </label>
          <span
            className="text-md ml-2 rounded-lg px-3 py-2
        text-center text-white"
          >
            ...
          </span>
        </nav>
      ) : (
        <div className="w-full" />
      )}

      {renderComponent()}

      {pageSelectorIndex <= Number(pages) - 2 ? (
        <nav className="flex w-full justify-start">
          <span
            className="text-md mr-2 rounded-lg px-3 py-2
        text-center text-white"
          >
            ...
          </span>
          <input
            type="radio"
            id={'pageselector-last'}
            name="pageselector"
            className="peer"
            value={ceilPage}
            onChange={() => setPageSelectorIndex(ceilPage)}
          />
          <label
            htmlFor={'pageselector-last'}
            className="text-md rounded-lg border border-mesh-color-neutral-300 px-3 py-2 text-center
          text-white transition-all duration-500 peer-checked:bg-mesh-color-primary-1200 peer-checked:font-semibold
          peer-checked:text-mesh-color-others-black peer-hover:cursor-pointer"
          >
            {ceilPage}
          </label>
        </nav>
      ) : (
        <div className="w-full" />
      )}
    </div>
  )
}

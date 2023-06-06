export function PaymentAddValuesInputs() {
  //
  return (
    <div className="mt-7 grid grid-cols-2 grid-rows-2 gap-2">
      {/* R$50 __________________________ */}
      <div className="flex">
        <input
          type="radio"
          id="settings_index-1"
          name="settings_index"
          className="peer appearance-none"
          value={50}
          defaultChecked
        />
        <label
          htmlFor="settings_index-1"
          className="flex w-full select-none items-center justify-center gap-4 rounded-md border-2 border-transparent 
bg-[#3C403C]  bg-transparent px-4 py-3 text-lg 
font-semibold text-[#A7B0A0] transition-all duration-500 peer-checked:border-[#D3F375] peer-checked:bg-[#5E675E] peer-checked:text-white"
        >
          R$5,00
        </label>
      </div>
      {/* R$10 __________________________ */}
      <div className="flex items-center justify-center">
        <input
          type="radio"
          id="settings_index-2"
          name="settings_index"
          className="peer appearance-none"
          value={10}
        />
        <label
          htmlFor="settings_index-2"
          className="flex w-full select-none items-center justify-center gap-4 rounded-md border-2
border-transparent bg-[#3C403C] bg-transparent px-4 py-3 text-center text-lg
font-semibold text-[#A7B0A0] transition-all duration-500 peer-checked:border-[#D3F375] peer-checked:bg-[#5E675E] peer-checked:text-white"
        >
          R$10,00
        </label>
      </div>
      {/* R$25 __________________________ */}
      <div className="flex items-center justify-center">
        <input
          type="radio"
          id="settings_index-3"
          name="settings_index"
          className="peer appearance-none"
          value={25}
        />
        <label
          htmlFor="settings_index-3"
          className="flex w-full select-none items-center justify-center gap-4 rounded-md border-2
border-transparent bg-[#3C403C] bg-transparent px-4 py-3 text-center text-lg
font-semibold text-[#A7B0A0] transition-all duration-500 peer-checked:border-[#D3F375] peer-checked:bg-[#5E675E] peer-checked:text-white"
        >
          R$25,00
        </label>
      </div>
      {/* R$50 __________________________ */}
      <div className="flex items-center justify-center">
        <input
          type="radio"
          id="settings_index-4"
          name="settings_index"
          className="peer appearance-none"
          value={50}
        />
        <label
          htmlFor="settings_index-4"
          className="flex w-full select-none items-center justify-center gap-4 rounded-md border-2
border-transparent bg-[#3C403C] bg-transparent px-4 py-3 text-center text-lg
font-semibold text-[#A7B0A0] transition-all duration-500 peer-checked:border-[#D3F375] peer-checked:bg-[#5E675E] peer-checked:text-white"
        >
          R$50,00
        </label>
      </div>
      {/* R$100 __________________________ */}
      <div className="flex items-center justify-center">
        <input
          type="radio"
          id="settings_index-5"
          name="settings_index"
          className="peer appearance-none"
          value={100}
        />
        <label
          htmlFor="settings_index-5"
          className="flex w-full select-none items-center justify-center gap-4 rounded-md border-2
border-transparent bg-[#3C403C] bg-transparent px-4 py-3 text-center text-lg
font-semibold text-[#A7B0A0] transition-all duration-500 peer-checked:border-[#D3F375] peer-checked:bg-[#5E675E] peer-checked:text-white"
        >
          R$100,00
        </label>
      </div>
      {/* R$200 __________________________ */}
      <div className="flex items-center justify-center">
        <input
          type="radio"
          id="settings_index-6"
          name="settings_index"
          className="peer appearance-none"
          value={200}
        />
        <label
          htmlFor="settings_index-6"
          className="flex w-full select-none items-center justify-center gap-4 rounded-md border-2
border-transparent bg-[#3C403C] bg-transparent px-4 py-3 text-center text-lg
font-semibold text-[#A7B0A0] transition-all duration-500 peer-checked:border-[#D3F375] peer-checked:bg-[#5E675E] peer-checked:text-white"
        >
          R$200,00
        </label>
      </div>
      {/* R$500 __________________________ */}
      <div className="flex items-center justify-center">
        <input
          type="radio"
          id="settings_index-7"
          name="settings_index"
          className="peer appearance-none"
          value={500}
        />
        <label
          htmlFor="settings_index-7"
          className="flex w-full select-none items-center justify-center gap-4 rounded-md border-2
border-transparent bg-[#3C403C] bg-transparent px-4 py-3 text-center text-lg
font-semibold text-[#A7B0A0] transition-all duration-500 peer-checked:border-[#D3F375] peer-checked:bg-[#5E675E] peer-checked:text-white"
        >
          R$500,00
        </label>
      </div>
      {/* R$1000 __________________________ */}
      <div className="flex items-center justify-center">
        <input
          type="radio"
          id="settings_index-8"
          name="settings_index"
          className="peer appearance-none"
          value={1000}
        />
        <label
          htmlFor="settings_index-8"
          className="flex w-full select-none items-center justify-center gap-4 rounded-md border-2
border-transparent bg-[#3C403C] bg-transparent px-4 py-3 text-center text-lg
font-semibold text-[#A7B0A0] transition-all duration-500 peer-checked:border-[#D3F375] peer-checked:bg-[#5E675E] peer-checked:text-white"
        >
          R$1000,00
        </label>
      </div>
    </div>
  )
}

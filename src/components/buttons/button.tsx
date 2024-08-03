const BlurButton = ({ text = "Button" }: { text: string }) => {
  return <>
  <button class="backdrop-blur-[10px] bg-[rgba(0,0,0,0.3)] p-3 rounded-[100px] cursor-pointer border-0 uppercase text-xs font-Mont hover:border border-[rgba(0,0,0,0.4)] transition duration-700">{text}</button>
  </>;
};

export { BlurButton };

export default function Timeline(props: { isArriving: boolean }) {
  return (
    <div className="relative h-[5px] bg-neutral-400 my-2 w-full">
      <div className="absolute h-[13px] w-[13px] bg-black rounded-full -top-[5px] left-[calc(50%_-_6px)] z-10"></div>
      {props.isArriving && (
        <div className="absolute -top-[5px] animate-arrival">
          <div className="absolute h-[13px] w-[13px] rounded-full  bg-red-500"></div>
          <div className="absolute h-[13px] w-[13px] rounded-full  bg-red-500 animate-ping"></div>
        </div>
      )}
    </div>
  );
}

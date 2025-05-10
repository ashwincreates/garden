import { PropsWithChildren } from "react";

function Kbd(props: PropsWithChildren) {
  return (
    <kbd
      className="hidden sm:block bg-muted px-1.5 py-0.5 rounded text-[10px] font-semibold text-muted-foreground"
    >
      {props.children}
    </kbd>
  );
}

export default Kbd;

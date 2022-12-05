import { Burguer } from "./styled";

type BurguerProps = {
  clicked: boolean;
  handleClick: () => (void);
};

export function BurguerButton(props: BurguerProps) {
  return (
    <Burguer>
      <div
        onClick={props.handleClick}
        className={`icon nav-icon-5 ${props.clicked ? `open` : ``}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Burguer>
  );
}

import classes from "./Button.module.css";

// export interface ButtonProps
//   extends React.DetailedHTMLProps<
//       React.ButtonHTMLAttributes<HTMLButtonElement>,
//       HTMLButtonElement
//     >,
//     React.AriaAttributes {}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

// interface ButtonProps extends React.DetailedHTMLProps {
//   className: string;
//   children: ReactNode;
//   type: "button" | "submit" | "reset";
//   onClick?: () => void;
//   onSubmit?: () => void;
// };

// const Button: React.FC<ButtonProps> = (props) => {
//   const { children, className, ...rest } = props;
//   return (
//     <button className={classes.button} {...rest}>
//       {children}
//     </button>
  // );

  const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${classes.button} ${props.className}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;

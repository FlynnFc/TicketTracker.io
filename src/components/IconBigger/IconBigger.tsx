import { IconContext } from "react-icons";

const Iconbigger = ({ children }: any, props: any) => {
  return (
    <>
      <IconContext.Provider value={{ size: "2em", color: "white" }}>
        {children}
      </IconContext.Provider>
    </>
  );
};

export default Iconbigger;

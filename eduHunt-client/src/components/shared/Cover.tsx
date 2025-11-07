import styles from "./Cover.module.css";

const Cover = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <div
      className={`${styles.cover} h-[30vh] md:h-[50vh]  text-white text-center flex flex-col items-center justify-center space-y-3`}
    >
      <h1 className="text-center text-3xl md:text-4xl uppercase font-bold">
        {title}
      </h1>
      <p className="text-center">{subTitle}</p>
    </div>
  );
};

export default Cover;

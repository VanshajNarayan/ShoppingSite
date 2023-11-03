import "./PageNavigation.css";

const PageNavigation = ({titleData}) => {
  const nameTitle = titleData.map((items) => items.name);
  const [name] = nameTitle;
  return (
    <>
      <section className="navigation_Section">
        <div className="navigationBox">
          <p className="navigationHeading"><span>Home/</span>{name} </p>
        </div>
      </section>
    </>
  )
};

export default PageNavigation;
import "./Category.css";

const Category = () => {
  const categoryNames = ["All", "Mobile", "Laptop", "Computer", "Accessories", "Watch"];
  return (
    <>
      <div className="categorybox">
        <div className="categoryHeading">
          <p style={{fontSize:'1.5rem', color:'#fff', fontWeight:'600'}} >Category</p>
        </div>
        <div className="categoryLists">
          <ul type="none">
            {
              categoryNames.map((categy, index) => (
                <li key={index}>
                  {categy}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
};

export default Category;
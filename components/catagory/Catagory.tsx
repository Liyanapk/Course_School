import './Catagory.css'



export default function Catagory(){

    const categories = [
        "",
        "Healthcare",
        "Beauty & Fashion",
        "Education & Travel",
        "",
        "",
        "Kitchen",
        "Medicle & Entertain",
        "Medicle & Science",
        "Tour & Travel",
        "",
        "",
        "Kitchen",
        "Featured",
        "Popular",
        "Latest",
        ""
      ];
    
      return (
        <div className="categories-container">
          <h3 className="category-header">HISTUDY FEATURE CATEGORY</h3>
          <div className="category-list">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`category-item ${
                  category === "Beauty & Fashion" ? "active" : ""
                }`}
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      );
}
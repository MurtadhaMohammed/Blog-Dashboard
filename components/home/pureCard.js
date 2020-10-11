import Link  from "next/link";

export const PureCard = ({ item }) => {
  return (
    <div className="blog-card">
      <img src={item.image} />
      <h3>{item.title}</h3>
      <small>{item.athor}</small>
      <div className="blog-card-footer">
        <Link href={`/blog/${item.id}`}>
          <a>View</a>
        </Link>
        <span>June 19, 2020</span>
      </div>
    </div>
  );
};

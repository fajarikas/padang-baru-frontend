import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Breadcrumb({ list }) {
  return (
    <section className="text-white-primary py-3 lg:py-8 px-4">
      <div className="container mx-auto">
        <ul className="breadcrumb">
          {list?.map?.((item, index) => {
            const arias =
              index === list.length - 1 ? { "aria-label": "current-page" } : {};
            return (
              <li key={item.id || index}>
                {" "}
                {/* Gunakan item.id jika ada, atau index sebagai fallback */}
                {item.url ? (
                  <Link to={item.url} {...arias}>
                    {item.name}
                  </Link>
                ) : (
                  <span {...arias}>{item.name}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

Breadcrumb.propTypes = {
  list: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.oneOfType([propTypes.string, propTypes.number]),
      name: propTypes.string.isRequired,
      url: propTypes.string,
    })
  ).isRequired,
};

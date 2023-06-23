import React from "react";

function Header() {
  const data = { Heading: "project", ToBeCompleted: "on time" };
  return (
    <div>
      <promo Heading={data.Heading} ToBeCompleted={data.ToBeCompleted} />
    </div>
  );
}

export default Header;

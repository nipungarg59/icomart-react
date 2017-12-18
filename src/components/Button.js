import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  button: {
    margin: 2,
    fontSize: "1.2em",
    borderRadius: 5,
    color: "white",
    padding: "2px 5px"
  }
});

const buttonTypes = type => {
  switch (type) {
    case "facebook":
      return { icon: "facebook-official", color: "3b5998" };
    case "github":
      return { icon: "github", color: "333" };
    case "medium":
      return { icon: "medium", color: "00ab6c" };
    case "telegram":
      return { icon: "telegram", color: "0088cc" };
    case "twitter":
      return { icon: "twitter", color: "1da1f2" };
    case "youtube":
      return { icon: "youtube-play", color: "ff0000" };
  }
};

const Button = ({ link, type, text }) => (
  <a
    className={css(styles.button)}
    href={link}
    style={{ backgroundColor: `#${buttonTypes(type).color}` }}
  >
    <i className={`fa fa-${buttonTypes(type).icon}`} />
  </a>
);

export default Button;

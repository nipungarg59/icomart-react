import React from "react";
import { StyleSheet, css } from "aphrodite";

import Button from "./Button";

const styles = StyleSheet.create({
  cardImage: {
    width: "100%"
  },
  card: {
    padding: "10px 20px",
    margin: "10px 0",
    borderRadius: 5,
    boxShadow: "5px 5px 25px 0 rgba(46, 61, 73, 0.2)",
    transition: "all 0.3s ease",
    ":hover": {
      boxShadow: "2px 2px 10px 0 rgba(46, 61, 73, 0.2)"
    }
  },
  cardBody: {
    padding: 20,
    overflowWrap: "break-word",
    wordWrap: "break-word",
    hyphens: "auto"
  },
  cardButtons: {
    display: "flex",
    justifyContent: "center"
  }
});

const time = t => {
  if (t < 1000) {
    return `${t} milliseconds`;
  } else if (t < 60 * 1000) {
    return `${Math.round(t / 1000)} seconds`;
  } else if (t < 60 * 60 * 1000) {
    return `${Math.round(t / 60000)} minutes`;
  } else if (t < 24 * 60 * 60 * 1000) {
    return `${Math.round(t / 3600000)} hours`;
  } else if (t < 356 * 24 * 60 * 60 * 1000) {
    return `${Math.round(t / 86400000)} days`;
  } else {
    return `${Math.round(t / 31536000000)} years`;
  }
};

const timeString = t => {
  if (t < 0) {
    return `${time(-t)} ago`;
  } else {
    return `${time(t)} left`;
  }
};

const Card = ({ ico, extra }) => (
  <div className={css(styles.card)}>
    <h4 className="text-muted text-right">
      {timeString(new Date(ico.close_date) - new Date())}
    </h4>
    {ico.ico_name ? (
      <img
        src={ico.img_url}
        alt={ico.ico_name}
        className={css(styles.cardImage)}
      />
    ) : (
      ""
    )}
    <h1 className="text-center">{ico.ico_name}</h1>
    <p className={css(styles.cardBody)}>{ico.short_description}</p>
    <div className={css(styles.cardButtons)}>
      <Button type="facebook" link={ico.facebook_link} />
      <Button type="github" link={ico.github_link} />
      <Button type="medium" link={ico.medium_link} />
      <Button type="telegram" link={ico.telegram_link} />
      <Button type="youtube" link={ico.youtube_link} />
    </div>
    <div>{extra}</div>
  </div>
);

export default Card;

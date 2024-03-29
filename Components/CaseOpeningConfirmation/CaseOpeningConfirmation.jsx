import React from "react";
import styles from "./CaseOpeningConfirmation.module.scss";
import Item from "../Item/Item";
import { GreenButton } from "../GreenButton/GreenButton";
import { itemType } from "public/scripts/drop/item-type";
export const CaseOpeningConfirmation = (props) => {
  return (
    <div className={styles.caseOpeningConfirmation}>
      <div className={styles.itemWrap}>
        <Item type={itemType.GREY} imageLocalPath={props.image} imageUrl={props.imageUrl} weapon={props.title} />
      </div>

      <div className={styles.submitBtnWrap}>
        <GreenButton id="unlockBtn" onClick={() => props.onSubmit()} text="Continue" />
      </div>
    </div>
  );
};

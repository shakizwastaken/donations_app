const _newId = () => {
  return Math.round(Math.random() * 100);
};

export class cartItem {
  constructor(id, ammount, campaignId, campaignTitle, campaignImg) {
    this.ammount = ammount;
    this.campaignId = campaignId;
    this.campaignTitle = campaignTitle;
    this.campaignImg = campaignImg;
    this.id = id;
  }

  setAmmount = (newAmmount) => {
    this.ammount = newAmmount;
  };
}

export const createItem = (
  { ammount, campaignId, campaignTitle, campaignImg },
  state
) => {
  const id = _newId();
  const item = new cartItem(
    id,
    ammount,
    campaignId,
    campaignTitle,
    campaignImg
  );
  return { ...state, items: { ...state.items, [id]: item } };
};

export const deleteItem = (id, state) => {
  const { [id]: item, ...otherItems } = state.items;
  return { ...state, items: otherItems };
};

export const changeAmmount = ({ id, newAmmount }, state) => {
  const { [id]: item, ...otherItems } = state.items;
  item.setAmmount(newAmmount);
  return { ...state, items: { item, otherItems } };
};

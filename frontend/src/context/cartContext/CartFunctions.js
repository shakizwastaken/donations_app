const _newId = () => {
  return Math.round(Math.random() * 100);
};

export class cartItem {
  constructor(id, ammount, campaignId) {
    this.ammount = ammount;
    this.campaignId = campaignId;
    this.id = id;
  }

  setAmmount = (newAmmount) => {
    this.ammount = newAmmount;
  };
}

export const createItem = ({ ammount, campaignId }, state) => {
  const id = _newId();
  const item = new cartItem(id, ammount, campaignId);
  return { ...state, items: { ...state.items, item } };
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

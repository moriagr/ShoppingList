export interface CardItemsProps {
  itemsInCategory: { [name: string]: number };
  category: string;
}

export interface CardProps {
  category: {
    _id: string;
    name: string;
  };
}

export interface CardTitleProps {
  title: string;
}

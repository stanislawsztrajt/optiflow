interface sortingOption {
  text: string,
  variable: string,
  sort: string
}

export const eventsSortingConfig:sortingOption[] = [
  {
    text: "Data: rosnąco",
    variable: "date",
    sort: "+",
  },
  {
    text: "Data: malejąco",
    variable: "date",
    sort: "-"
  },
  {
    text: "Cena: rosnąco",
    variable: "price",
    sort: "+"
  },
  {
    text: "Cena: malejąco",
    variable: "price",
    sort: "-"
  },
]

export const booksSortingConfig:sortingOption[] = [
  {
    text: "Cena: rosnąco",
    variable: "price",
    sort: "+"
  },
  {
    text: "Cena: malejąco",
    variable: "price",
    sort: "-"
  },
]

export const privateLessonsSortingConfig:sortingOption[] = [
  {
    text: "Cena: rosnąco",
    variable: "price",
    sort: "+"
  },
  {
    text: "Cena: malejąco",
    variable: "price",
    sort: "-"
  },
]

export const lostItemsSortingConfig:sortingOption[] = [
  {
    text: "Data: rosnąco",
    variable: "date",
    sort: "+",
  },
  {
    text: "Data: malejąco",
    variable: "date",
    sort: "-"
  }
]

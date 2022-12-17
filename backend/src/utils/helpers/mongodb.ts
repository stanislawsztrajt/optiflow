export const parseObjectObjectId = (object: object) => {
  return JSON.parse(JSON.stringify(object))
}
declare module "*.png" {
  export default "" as string;
}

declare module "*.jpg" {
  export default "" as string;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

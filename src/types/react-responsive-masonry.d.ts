declare module "react-responsive-masonry" {
  import * as React from "react";

  export interface MasonryProps {
    columnsCount?: number;
    gutter?: string;
    children?: React.ReactNode;
  }

  export const Masonry: React.FC<MasonryProps>;

  export interface ResponsiveMasonryProps {
    columnsCountBreakPoints?: Record<number, number>;
    children?: React.ReactNode;
  }

  export const ResponsiveMasonry: React.FC<ResponsiveMasonryProps>;

  export default ResponsiveMasonry;
}

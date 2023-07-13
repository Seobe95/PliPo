import { pallete } from "@/style/color";
import { style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const skeletonContainerClass = style({
  border: `1px solid ${pallete.borderLine}`,
  padding: "16px",
  paddingBottom: 24,
  borderRadius: 8,
  height: "auto",
  marginTop: 16
});

export const skeletonElementClass = recipe({
  base: {
    background: `${pallete.bg_1}`,
    margin: "10px 0px",
    borderRadius: 4,
  },

  variants: {
    type: {
      title: {
        width: "100%",
        height: 14,
      },
      text: {
        width: "100%",
        height: 24,
      },
      profile: {
        width: 32,
        height: 32,
        borderRadius: "50%",
      },
    },
  },
});

export type SkeletonVariants = RecipeVariants<typeof skeletonElementClass>;

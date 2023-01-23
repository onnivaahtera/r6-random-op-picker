import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const operatorRouter = createTRPCRouter({
  getOperator: publicProcedure
    .input(z.object({ role: z.string() }))
    .query(({ ctx, input }) => {
      const nums = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
      ];
      const random = nums[Math.floor(Math.random() * nums.length)];
      if (input.role === "attacker") {
        return ctx.prisma.attacker.findFirst({
          where: {
            id: random,
          },
        });
      } else {
        return ctx.prisma.attacker.findFirst({
          where: {
            id: random,
          },
        });
      }
    }),
});

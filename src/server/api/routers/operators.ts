import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const operatorRouter = createTRPCRouter({
  getOperator: publicProcedure
    .input(z.object({ role: z.string(), id: z.number() }))
    .mutation(({ ctx, input }) => {
      if (input.role === "attacker") {
        return ctx.prisma.attacker.findFirst({
          where: {
            id: input.id,
          },
        });
      } else {
        return ctx.prisma.defender.findFirst({
          where: {
            id: input.id,
          },
        });
      }
    }),
});

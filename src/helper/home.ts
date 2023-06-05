export async function onHome(ctx: any, next: any): Promise<void> {
  ctx.body = {
    code: 0,
    message: 'ok.',
    data: 'Hi, chat to me.',
  };

  await next();
}

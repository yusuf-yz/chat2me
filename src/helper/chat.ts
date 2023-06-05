const openai = require('../helper/openai');
const StopTag = '-s|e-';

export async function onChat2Text(ctx: any): Promise<void> {
  try {
    const { prompt, user = 'visitor' } = ctx.request.body;

    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt.join(StopTag),
      max_tokens: 2048,
      temperature: 0,
      user,
      stop: [StopTag],
    });

    ctx.body = {
      code: 0,
      message: 'ok.',
      payload: {
        role: user,
        content: completion.data.choices.map((i: any) => i?.text).join('\n'),
      },
    };
  } catch (error) {
    console.log('error is ', error.message);
    ctx.body = {
      code: 1,
      message: error.message,
    };
  }
}

export async function onChat2Image(ctx: any): Promise<void> {
  try {
    const { prompt, user = 'visitor' } = ctx.request.body;

    const response = await openai.createImage({
      prompt,
      n: 2,
      size: '1024x1024',
      user,
    });

    ctx.body = {
      code: 0,
      message: 'ok.',
      payload: {
        role: user,
        content: response.data,
      },
    };
  } catch (error) {
    console.log('error is ', error.message);
    ctx.body = {
      code: 1,
      message: error.message,
    };
  }
}

class CanvasBackground {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private width: number;
  private height: number;

  constructor(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error('Unable to get 2D context.');
    }

    this.canvas = canvas;
    this.ctx = ctx;
    this.width = canvas.width;
    this.height = canvas.height;

    this.draw();
  }

  private draw() {
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    for (let i = 0; i < 50; i++) {
      this.ctx.fillRect(
        Math.random() * this.width,
        Math.random() * this.height,
        Math.random() * 50,
        Math.random() * 50
      );
    }
  }
}

const canvas = document.getElementById('canvas-background') as HTMLCanvasElement;
if (canvas) {
  new CanvasBackground(canvas);
}

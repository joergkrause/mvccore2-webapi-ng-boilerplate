import { Component, Input, Output, ElementRef, ViewChild, AfterViewInit, OnInit, HostListener } from '@angular/core';

import { ApiService } from '../../../services/index';

export interface ChartTupel {
  x: number,
  y: number,
  v: number,
  posX?: number,
  posY?: number
}

@Component({
  moduleId: module.id,
  selector: 'app-chart',
  styles: [
    '.plotarea { border: 2px solid black; }',
    '.someborder { border: 1px dashed blue; }'
  ],
  templateUrl: './site-chart.component. html'
})
export class SiteChartComponent implements AfterViewInit, OnInit {

  @Input()
  chartData: Array<ChartTupel>;

  @ViewChild('plotarea') plotarea: ElementRef;

  mouseDown: boolean;

  @Output()
  currentValue: number;

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    if (this.mouseDown) {
      let x = event.offsetX;
      let y = event.offsetY;
      let result = this.chartData.filter(d => {
        return d.posX === x && d.posY === y;
      });
      if (result.length === 1) {
        let value = result[0].v;
        console.log(value);
        this.currentValue = value;
      } else {
        console.log("NO" + result);
      }
    }
  }
  @HostListener('mouseup')
  onMouseup() {
    this.mouseDown = false;
  }
  @HostListener('mousedown', ['$event'])
  onMousedown(event) {
    this.mouseDown = true;
  }

  constructor(private apiService: ApiService) {
    this.chartData = new Array<ChartTupel>();
  }

  @Input()
  valueAt: number = 0;

  ngAfterViewInit(): void {
    let context: CanvasRenderingContext2D = this.plotarea.nativeElement.getContext('2d');
    context.imageSmoothingEnabled = false;
    this.getPointData(context);
  }

  ngOnInit(): void {

  }


  getPointData(context: CanvasRenderingContext2D): void {
    if (!context) return;
    this.apiService.getChartData().then(data => {
      data.forEach(d => {
        this.chartData.push({
          x: d.x, 
          y: d.y,
          v: d.v
        })
      });
      this.chartData.forEach(tupel => {
        let v = tupel.v;
        let rgb = this.getRgbFromValue(v);
        context.fillStyle = "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + "," + (rgb.a / 255) + ")";
        let scaledPoints = this.scalePointsToArea(tupel.x, tupel.y);
        tupel.posX = Math.round(scaledPoints.x);
        tupel.posY = Math.round(scaledPoints.y);
        context.fillRect(scaledPoints.x, scaledPoints.y, 1, 3);
      });
    });
  }

  private scalePointsToArea(x: number, y: number): { x: number, y: number } {
    var w = 150;
    var h = 90;
    var minX = 67;
    var minY = 33;
    var maxX = 19933;
    var maxY = 1967;
    var scaledX = (w / (maxX - minX)) * (x - minX);
    var scaledY = (h / (maxY - minY)) * (y - minY);
    return { x: scaledX, y: scaledY };
  }

  private scaleAreaToPoints(x: number, y: number): { x: number, y: number } {
    var w = 150;
    var h = 90;
    var minX = 67;
    var minY = 33;
    var maxX = 19933;
    var maxY = 1967;
    var unscaledX = minX + x * (maxX - minX) / w;
    var unscaledY = minY + y * (maxY - minY) / h;
    return { x: unscaledX, y: unscaledY };
  }

  private getRgbFromValue(value: number): { r: number, g: number, b: number, a: number } {
    if (value < 2) {
      return { r: 255, g: 0, b: 0, a: 255 };
    }
    if (value < 4) {
      return { r: 0, g: 255, b: 0, a: 255 };
    }
    return { r: 0, g: 0, b: 255, a: 255 };
  }


}
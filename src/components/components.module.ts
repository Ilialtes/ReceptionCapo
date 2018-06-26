import { NgModule } from '@angular/core';
import { ReceptionCardComponent } from './reception-card/reception-card';
import { MapComponent } from './map/map';
@NgModule({
	declarations: [ReceptionCardComponent,
    MapComponent],
	imports: [],
	exports: [ReceptionCardComponent,
    MapComponent]
})
export class ComponentsModule {}

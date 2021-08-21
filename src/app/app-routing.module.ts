import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TimelinesComponent} from './components/timelines/timelines.component';
import {YoutubePlaylistComponent} from './components/youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './components/youtube-player/youtube-player.component';
import {ProductListComponent} from './components/product/product-list/product-list.component';
import {ProductCreateComponent} from './components/product/product-create/product-create.component';
import {DictionaryPageComponent} from './components/dictionary/dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './components/dictionary/dictionary-detail/dictionary-detail.component';
import {ProductUpdateComponent} from './components/product/product-update/product-update.component';


const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent
  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  },
  {
    path: 'product/list',
    component: ProductListComponent
  },
  {
    path: 'product/create',
    component: ProductCreateComponent
  },
  {
    path: 'product/update/:id',
    component: ProductUpdateComponent
  },
  {
    path: 'dictionaries',
    component: DictionaryPageComponent,
    children: [{
      path: ':id',
      component: DictionaryDetailComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

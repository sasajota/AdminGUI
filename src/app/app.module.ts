import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserComponent } from './users/user/user.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleComponent } from './articles/article/article.component';
import { ArticleCategoriesComponent } from './article-categories/article-categories.component';
import { ArticleCategoryComponent } from './article-categories/article-category/article-category.component';
import { MenusComponent } from './menus/menus.component';
import { MenuListComponent } from './menus/menu-list/menu-list.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { MenuItemComponent } from './menu-items/menu-item/menu-item.component';
import { FilesComponent } from './files/files.component';
import { FileComponent } from './files/file/file.component';
import { FileListComponent } from './files/file-list/file-list.component';
import { DeletedContentsComponent } from './deleted-contents/deleted-contents.component';
import { DeletedContentListComponent } from './deleted-contents/deleted-content-list/deleted-content-list.component';
import { DeletedItemComponent } from './deleted-contents/deleted-item/deleted-item.component';
import { HeaderComponent } from './header/header.component';
import { UserEditComponent } from './users/user/user-edit/user-edit.component';
import { MenuEditComponent } from './menus/menu/menu-edit/menu-edit.component';
import { MenuComponent } from './menus/menu/menu.component';
import { FileEditComponent } from './files/file/file-edit/file-edit.component';
import { ArticleCategoryEditComponent } from './article-categories/article-category/article-category-edit/article-category-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserListComponent,
    UserComponent,
    ArticlesComponent,
    ArticleListComponent,
    ArticleComponent,
    ArticleCategoriesComponent,
    ArticleCategoryComponent,
    MenusComponent,
    MenuListComponent,
    MenuItemsComponent,
    MenuItemComponent,
    FilesComponent,
    FileComponent,
    FileListComponent,
    DeletedContentsComponent,
    DeletedContentListComponent,
    DeletedItemComponent,
    HeaderComponent,
    UserEditComponent,
    MenuEditComponent,
    MenuComponent,
    FileEditComponent,
    ArticleCategoryEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

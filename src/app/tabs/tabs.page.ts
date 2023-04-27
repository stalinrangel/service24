import { Component, EnvironmentInjector, inject, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonTabs, Platform, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  public currentTab: any = "tab1";
	@ViewChild(IonTabs) public tabs: any;
	public subscription: any;

	constructor(private platform: Platform,public navCtrl: NavController,public router: Router){}
	
	setTab() {
    	this.currentTab = this.tabs.getSelected();
	}

	ionViewDidEnter(){
	    this.subscription = this.platform.backButton.subscribe(()=>{
	        if (this.router.url == '/tabs/tab1' || this.router.url == '/tabs/tab2' || this.router.url == '/tabs/tab3') {
			    //navigator['app'].exitApp();
		    }
	    });
	}

	ionPageWillLeave(){
		this.subscription.unsubscribe();
	}

	async openTab(tab: string, evt: MouseEvent) {
	    const tabSelected = this.tabs.getSelected();
	    evt.stopImmediatePropagation();
	    evt.preventDefault();
	    return tabSelected !== tab
	      ? await this.navCtrl.navigateRoot(this.tabs.outlet.tabsPrefix + '/' + tab)
	      : this.tabs.select(tab);
	}
}

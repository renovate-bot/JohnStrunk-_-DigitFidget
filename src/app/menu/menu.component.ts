import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, Router, RouterEvent } from '@angular/router';

type MenuItem = {
    path: string
    icon: string
    name: string
}

type Menu = {
  name: string
  items: MenuItem[]
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // Subscribe to changes in the route otherwise we don't see navigation
    // from menu -> menu.
    this.router.events.pipe().subscribe((e: Event) => {
      if (e instanceof RouterEvent) {
        this.getMenuEntries()
      }
   });
   this.getMenuEntries();
  }

  // The entries for the menu we're currently displaying
  menu: MenuItem[] | undefined

  menus: Menu[] = [
    {
      name: "main",  // main menu
      items: [
        { icon: "sports_esports", name: "New game", path: "/menu/new" },
        { icon: "scoreboard", name: "High scores", path: "/" },
        { icon: "help_center", name: "About", path: "/about" },
      ]
    },
    {
      name: "new",  // new game menu
      items: [
        { icon: "looks_one", name: "Easy", path: "/game/4" },
        { icon: "looks_two", name: "Moderate", path: "/game/6" },
        { icon: "looks_3", name: "Hard", path: "/game/7" },
        { icon: "looks_4", name: "Expert", path: "/game/8" },
        { icon: "arrow_back", name: "Back", path: "/menu/main" },
      ]
    }
  ]

  getMenuEntries() {
    let menuName = this.route.snapshot.paramMap.get('menu-name') || "main";
    for (const m of this.menus) {
      if (m.name === menuName) {
        this.menu = m.items
      }
    }
  }
}

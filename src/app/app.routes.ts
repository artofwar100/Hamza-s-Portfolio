import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "",
        pathMatch: "full"
    },
    {
        path: "",
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    },
    {
        path: "**",
        redirectTo: "",
        pathMatch: "full"
    },
];

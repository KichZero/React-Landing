import React from 'react';
import { AppBar, ToggleThemeButton } from 'react-admin';

export const MyAppBar = () => (
    <AppBar toolbar={<ToggleThemeButton />} />
);
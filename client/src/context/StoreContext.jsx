import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { products } from '../assets/assets';

// single source of truth for the app context
export const StoreContext = createContext(null);
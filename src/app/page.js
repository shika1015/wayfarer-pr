'use client'
import dynamic from 'next/dynamic'
const App = dynamic(() => import('./App'), { ssr: false })
export default function Page() {
  return <App />
}
```

然后在 Vercel Settings → Build & Development → **Root Directory** 改成 `/`，Framework 选 **Other**，Build Command 填：
```
echo done
```

Output Directory 填：
```
.

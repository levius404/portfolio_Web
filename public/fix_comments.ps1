$filePath = "d:\学习\前端\portfolio_Web\22403040\demo\styles.css"
$content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)
$lines = $content -split "`r`n"

# Line 585 (index 584)
$lines[584] = '/* 增强的响应式设计 */'
# Line 587 (index 586)
$lines[586] = '/* 平板设备 (768px - 1024px) */'
# Line 624 (index 623)
$lines[623] = '/* 小平板/大手机 (600px - 800px) */'
# Line 714 (index 713)
$lines[713] = '/* 移动设备 (400px - 600px) */'
# Line 794 (index 793)
$lines[793] = '/* 小型移动设备 (320px - 500px) */'
# Line 891 (index 890)
$lines[890] = '/* 超小型移动设备 (< 400px) */'
# Line 1032 (index 1031)
$lines[1031] = '/* Works 页循环滚动样式 */'
# Line 1085 (index 1084)
$lines[1084] = '/* 模态框样式 */'
# Line 1217 (index 1216)
$lines[1216] = '/* 响应式优化 */'

$newContent = $lines -join "`r`n"
[System.IO.File]::WriteAllText($filePath, $newContent, (New-Object System.Text.UTF8Encoding $true))
Write-Output "Done! Fixed 9 garbled comments."

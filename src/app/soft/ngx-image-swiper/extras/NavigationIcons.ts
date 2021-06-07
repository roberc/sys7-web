export const enum NavigationIcons {
  // tslint:disable-next-line:max-line-length
  left = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDVweCIgaGVpZ2h0PSI0NXB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5sZWZ0LWFycm93PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImxlZnQtYXJyb3ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyLjUwMDAwMCwgMjIuNTAwMDAwKSByb3RhdGUoMTgwLjAwMDAwMCkgdHJhbnNsYXRlKC0yMi41MDAwMDAsIC0yMi41MDAwMDApIHRyYW5zbGF0ZSgxLjAwMDAwMCwgMS4wMDAwMDApIj4KICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgc3Ryb2tlPSIjRjFGMUYxIiBmaWxsPSIjRjFGMUYxIiBjeD0iMjEuNSIgY3k9IjIxLjUiIHI9IjIxLjUiPjwvY2lyY2xlPgogICAgICAgICAgICA8cGF0aCBkPSJNMTcuNDM2ODgwMywyMC41OTIzMzU4IEwyMy44NzQyOTkzLDE0LjQyMzc4NjEgQzI0LjQ2NDU4NjMsMTMuODU4NzM4IDI1LjQzMDI2NjMsMTMuODU4NzM4IDI2LjAxOTg4MTgsMTQuNDIzNzg2MSBMMjYuNTU3Nzg4NCwxNC45Mzg2MzY0IEMyNy4xNDc0MDM5LDE1LjUwMzA0MSAyNy4xNDc0MDM5LDE2LjQyOTEyNzkgMjYuNTU3Nzg4NCwxNi45OTQxNzYgTDIxLjY0NTQ0NTQsMjEuNzAxODM4MSBMMjYuNTU3Nzg4NCwyNi40MDk1MDAyIEMyNy4xNDc0MDM5LDI2Ljk3NDU0ODMgMjcuMTQ3NDAzOSwyNy45MDA2MzUyIDI2LjU1Nzc4ODQsMjguNDY1MDM5OCBMMjYuMDE5ODgxOCwyOC45Nzk4OTAxIEMyNS40MzAyNjYzLDI5LjU0NTU4MTggMjQuNDY0NTg2MywyOS41NDU1ODE4IDIzLjg3NDI5OTMsMjguOTc5ODkwMSBMMTcuNDM2ODgwMywyMi44MTAwNTMzIEMxNy4xMTk5MTE2LDIyLjUwNzU3ODggMTYuOTc5NTU4OSwyMi4xMDA4NDcxIDE3LjAwMjM5MTQsMjEuNzAxODM4MSBDMTYuOTc5NTU4OSwyMS4zMDI4MjkyIDE3LjExOTkxMTYsMjAuODk2MDk3NCAxNy40MzY4ODAzLDIwLjU5MjMzNTggWiIgaWQ9ImFycm93IiBmaWxsPSIjNTE1MTUxIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyLjAwMDAwMCwgMjEuNzAyMDc5KSByb3RhdGUoLTE4MC4wMDAwMDApIHRyYW5zbGF0ZSgtMjIuMDAwMDAwLCAtMjEuNzAyMDc5KSAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==',
  // tslint:disable-next-line:max-line-length
  right = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDVweCIgaGVpZ2h0PSI0NXB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5yaWdodC1hcnJvdzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJyaWdodC1hcnJvdyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIuNTAwMDAwLCAyMi41MDAwMDApIHJvdGF0ZSgxODAuMDAwMDAwKSB0cmFuc2xhdGUoLTIyLjUwMDAwMCwgLTIyLjUwMDAwMCkgdHJhbnNsYXRlKDEuMDAwMDAwLCAxLjAwMDAwMCkiPgogICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBzdHJva2U9IiNGMUYxRjEiIGZpbGw9IiNGMUYxRjEiIGN4PSIyMS41IiBjeT0iMjEuNSIgcj0iMjEuNSI+PC9jaXJjbGU+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNi40MzY4ODAzLDIwLjU5MjMzNTggTDIyLjg3NDI5OTMsMTQuNDIzNzg2MSBDMjMuNDY0NTg2MywxMy44NTg3MzggMjQuNDMwMjY2MywxMy44NTg3MzggMjUuMDE5ODgxOCwxNC40MjM3ODYxIEwyNS41NTc3ODg0LDE0LjkzODYzNjQgQzI2LjE0NzQwMzksMTUuNTAzMDQxIDI2LjE0NzQwMzksMTYuNDI5MTI3OSAyNS41NTc3ODg0LDE2Ljk5NDE3NiBMMjAuNjQ1NDQ1NCwyMS43MDE4MzgxIEwyNS41NTc3ODg0LDI2LjQwOTUwMDIgQzI2LjE0NzQwMzksMjYuOTc0NTQ4MyAyNi4xNDc0MDM5LDI3LjkwMDYzNTIgMjUuNTU3Nzg4NCwyOC40NjUwMzk4IEwyNS4wMTk4ODE4LDI4Ljk3OTg5MDEgQzI0LjQzMDI2NjMsMjkuNTQ1NTgxOCAyMy40NjQ1ODYzLDI5LjU0NTU4MTggMjIuODc0Mjk5MywyOC45Nzk4OTAxIEwxNi40MzY4ODAzLDIyLjgxMDA1MzMgQzE2LjExOTkxMTYsMjIuNTA3NTc4OCAxNS45Nzk1NTg5LDIyLjEwMDg0NzEgMTYuMDAyMzkxNCwyMS43MDE4MzgxIEMxNS45Nzk1NTg5LDIxLjMwMjgyOTIgMTYuMTE5OTExNiwyMC44OTYwOTc0IDE2LjQzNjg4MDMsMjAuNTkyMzM1OCBaIiBpZD0iYXJyb3ciIGZpbGw9IiM1MTUxNTEiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+'
}

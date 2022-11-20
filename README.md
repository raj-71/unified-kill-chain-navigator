
# Unified Kill Chain Navigator & Comparison Tool

In this project we have created a cyber attack or APT group’s report mapping and comparison tool. We took inspiration from MITRE ATT&CK Navigator Tool and created its modified version based on The Unified Kill Chain by Paul Pols. Comparison of multiple mapped reports can be done visually on a tactical level of abstraction. The analysis and observations gained after comparison is expected to offer a substantiated basis for realigning defensive capabilities and investments within organizations and to allow for the improvement of the predictive value of Red Team threat emulations.

## 🚀 Team 8Lostbytes
[Raj Kumar][1], [Sumit Chaudhary][2], [Bharat][3], [Sarthak][4]

[1]: https://github.com/raj-71
[2]: https://github.com/chaudharysumit07
[3]: https://github.com/bharat28112000
[4]: https://github.com/Sart2108


## Features
- Can map cyber attack or APT group’s reports(Tactics, Techniques, and Common Knowledge)
- Color grading of tactics based on The Unified Kill Chain
    - Green tactics - mainly used during Initial Foothold 
    - Yellow tactics - mainly used during Network Propagation
    - Red tactics - mainly used for obtaining end objective
- Can upload and download mapped reports in JSON format and for making changes at a later point of time if needed
- Can Compare multiple mapped reports at once( maximum 10 reports at a time)


## Installation Locally

Requirements (for windows)
- node v14.20.0 (latest) 
- npm v6.14.17 (latest)
- git v2.37.3 (latest)


Installation with npm

```bash
    $ git clone https://github.com/raj-71/unified-kill-chain-navigator.git
  
    $ cd unified-kill-chain-navigator
  
    $ npm install
```

Start Project on localhost

```bash
    $ npm start
```

Build Project for deployment (production)

```bash
    $ npm start
```
## Demo

**Mapping a Report**

https://user-images.githubusercontent.com/40698372/202911437-78d54ecd-043f-4af5-9332-f409a0e54453.mp4


**Comparing Reports**

https://user-images.githubusercontent.com/40698372/202911505-13213fcb-8893-417e-98d5-ff542b1d0dba.mp4



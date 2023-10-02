var request = require('request');
class classInfo
{
  constructor(name, alias, urlIndex, color)
  {
    this.name = name;
    this.alias = alias;
    this.urlIndex = urlIndex;
    this.color = color;
  }
}

const warrior = new classInfo('Warrior', ' ', 0, 0xd9901a),
sorc = new classInfo('Sorceress', 'Sorc', 8, 0x4e059c),
ranger = new classInfo('Ranger', ' ', 4, 0x29cf00),
berserker = new classInfo('Berserker', 'Zerk', 12, 0x04b55c),
tamer = new classInfo('Tamer', ' ', 16, 0xb51800),
musa = new classInfo('Musa', ' ', 20, 0x0062d9),
maehwa = new classInfo('Maehwa', ' ', 21, 0x00d9c7),
valkyrie = new classInfo('Valkyrie', 'Valk', 24, 0xe07902),
wizard = new classInfo('Wizard', 'Wiz', 28, 0x6c02e6),
witch = new classInfo('Witch', ' ', 31, 0x9d47ff),
ninja = new classInfo('Ninja', ' ', 26, 0xc43937),
kunoichi = new classInfo('Kunoichi', 'Kuno', 25, 0xc20e0c),
dk = new classInfo('Dark Knight', 'DK', 27, 0xad0200),
striker = new classInfo('Striker', ' ', 19, 0xe0e007),
mystic = new classInfo('Mystic', ' ', 23, 0x41f200),
lahn = new classInfo('Lahn', ' ', 11, 0xb80f00),
archer = new classInfo('Archer', ' ', 29, 0x20f000),
shai = new classInfo('Shai', ' ', 17, 0x00a3a8),
guardian = new classInfo('Guardian', ' ', 5, 0xdb9600);

module.exports = [warrior, sorc, ranger, berserker, tamer, musa, maehwa, valkyrie, wizard, witch, ninja, kunoichi, dk, striker, mystic, lahn, archer, shai, guardian];

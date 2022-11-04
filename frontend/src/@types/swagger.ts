/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */
import { SignedTransaction, NetworkType } from 'symbol-sdk';

export interface paths {
  '/user': {
    get: operations['getUser'];
    post: operations['addUser'];
  };
  '/users': {
    get: operations['getUsers'];
  };
  '/user/verify': {
    post: operations['verifyUser'];
  };
  '/quest': {
    get: operations['getQuest'];
    put: operations['updateQuest'];
    post: operations['addQuest'];
  };
  '/quest/set-hash': {
    post: operations['setQuestHash'];
  };
  '/quests': {
    get: operations['getQuests'];
  };
  '/guild/quest': {
    get: operations['getGuildQuest'];
    post: operations['addGuildQuest'];
  };
  '/guild/quests': {
    get: operations['getGuildQuests'];
  };
  '/guild': {
    get: operations['getGuild'];
    post: operations['addGuild'];
  };
  '/guilds': {
    get: operations['getGuilds'];
  };
  '/notices': {
    get: operations['getNotices'];
  };
  '/announce-aggregate-bonded': {
    post: operations['announceAggregateBonded'];
  };
}

export interface components {
  schemas: {
    Sccessful: {
      /** @enum {string} */
      status: 'ok' | 'error';
      message: string;
    };
    User: {
      public_key: string;
      name: string;
      /** @description base64 encoding */
      icon: string;
    };
    UserTable: components['schemas']['User'] & {
      /** @description new Date().getTime() */
      created: number;
    };
    Quest: {
      quest_id: number;
      nominate_guild_id?: number | null;
      transaction_hash?: string | null;
      title: string;
      description: string;
      reward: number;
      requester_public_key: string;
      worker_public_key?: string | null;
      /** @enum {string} */
      status: 'WANTED' | 'WORKING' | 'COMPLETED';
    };
    QuestTable: components['schemas']['Quest'] & {
      quest_id: number;
      /** @description new Date().getTime() */
      created: number;
    };
    Notice: {
      title: string;
      body: string;
      public_key: string;
      /** @description new Date().getTime() */
      created: number;
    };
    Guild: {
      owner_public_key: string;
      name: string;
      /** @description base64 encoding */
      icon: string;
    };
    GuildTable: components['schemas']['Guild'] & {
      guild_id: number;
      /** @description new Date().getTime() */
      created: number;
    };
  };
}

export interface operations {
  getUser: {
    parameters: {
      query: {
        public_key: string;
      };
    };
    responses: {
      /** Successful */
      200: {
        content: {
          'application/json': {
            data: components['schemas']['UserTable'] | null;
          };
        };
      };
    };
  };
  addUser: {
    responses: {
      /** Successful operation */
      200: {
        content: {
          'application/json': {
            data: components['schemas']['Sccessful'];
          };
        };
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['User'];
      };
    };
  };
  getUsers: {
    responses: {
      /** Successful */
      200: {
        content: {
          'application/json': {
            data: components['schemas']['UserTable'][];
          };
        };
      };
    };
  };
  verifyUser: {
    responses: {
      /** Successful operation */
      200: {
        content: {
          'application/json': {
            data: components['schemas']['Sccessful'];
          };
        };
      };
    };
    requestBody: {
      content: {
        'application/json': {
          /** @description User Symbol Public key */
          public_key: string;
          /** @description Issur from SSS */
          token: string;
        };
      };
    };
  };
  getQuest: {
    parameters: {
      query: {
        quest_id: number;
      };
    };
    responses: {
      /** Successful */
      200: {
        content: {
          'application/json': {
            data: components['schemas']['QuestTable'] | null;
          };
        };
      };
    };
  };
  updateQuest: {
    responses: {
      /** Successful */
      200: {
        content: {
          'application/json': {
            data: components['schemas']['Sccessful'];
          };
        };
      };
    };
    /** Register the contents of the updated quest（Cannot update transaction hash） */
    requestBody: {
      content: {
        'application/json': {
          quest_id: number;
          nominate_guild_id?: number;
          title?: string;
          description?: string;
          reward?: number;
          worker_public_key?: string;
        };
      };
    };
  };
  addQuest: {
    responses: {
      /** Successful */
      200: {
        content: {
          'application/json': {
            data: components['schemas']['Sccessful'];
          };
        };
      };
    };
    /** to blank transaction_hash, transaction_hash */
    requestBody: {
      content: {
        'application/json': components['schemas']['Quest'];
      };
    };
  };
  setQuestHash: {
    responses: {
      /** Successful */
      200: {
        content: {
          'application/json': {
            data: components['schemas']['Sccessful'];
          };
        };
      };
    };
    /** set transaction hash & worker public key when quest recieved. can only be written once */
    requestBody: {
      content: {
        'application/json': {
          quest_id: number;
          transaction_hash: string;
          worker_public_key: string;
        };
      };
    };
  };
  getQuests: {
    responses: {
      /** Successful */
      200: {
        content: {
          'application/json': {
            data: components['schemas']['QuestTable'][];
          };
        };
      };
    };
  };
  getGuildQuest: {
    parameters: {
      query: {
        quest_id: number;
      };
    };
    responses: {
      /** Successful */
      200: {
        content: {
          'application/json': {
            data: components['schemas']['QuestTable'] | null;
          };
        };
      };
    };
  };
  addGuildQuest: {
    responses: {
      /** Successful */
      200: {
        content: {
          'application/json': {
            data: components['schemas']['Sccessful'];
          };
        };
      };
    };
    /** to blank transaction_hash, transaction_hash & required nominate_guild_id */
    requestBody: {
      content: {
        'application/json': components['schemas']['Quest'];
      };
    };
  };
  getGuildQuests: {
    parameters: {
      query: {
        nominate_guild_id: number;
      };
    };
    responses: {
      /** Successful */
      200: {
        content: {
          'application/json': {
            data: components['schemas']['QuestTable'][];
          };
        };
      };
    };
  };
  getGuild: {
    parameters: {
      query: {
        guild_id: number;
      };
    };
    responses: {
      /** Successful */
      200: {
        content: {
          'application/json': {
            data: components['schemas']['GuildTable'] | null;
          };
        };
      };
    };
  };
  addGuild: {
    responses: {
      /** Successful */
      200: {
        content: {
          'application/json': {
            data: components['schemas']['Sccessful'];
          };
        };
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['Guild'];
      };
    };
  };
  getGuilds: {
    responses: {
      /** Successful */
      200: {
        content: {
          'application/json': {
            data: components['schemas']['GuildTable'][];
          };
        };
      };
    };
  };
  getNotices: {
    parameters: {
      query: {
        public_key: string;
      };
    };
    responses: {
      /** Successful */
      200: {
        content: {
          'application/json': {
            data: components['schemas']['Notice'][];
          };
        };
      };
    };
  };
  announceAggregateBonded: {
    responses: {
      200: {
        content: {
          'application/json': {
            data: components['schemas']['Sccessful'];
          };
        };
      };
    };
    requestBody: {
      content: {
        'application/json': {
          signedAggTransaction: SignedTransaction;
          signedHashLockTransaction: SignedTransaction;
          node: string;
          networkType: NetworkType;
        };
      };
    };
  };
}

export interface external {}

export enum ApiPaths {
  getUser = '/user',
  addUser = '/user',
  getUsers = '/users',
  verifyUser = '/user/verify',
  getQuest = '/quest',
  addQuest = '/quest',
  updateQuest = '/quest',
  setQuestHash = '/quest/set-hash',
  getQuests = '/quests',
  getGuildQuest = '/guild/quest',
  addGuildQuest = '/guild/quest',
  getGuildQuests = '/guild/quests',
  getGuild = '/guild',
  addGuild = '/guild',
  getGuilds = '/guilds',
  getNotices = '/notices',
}

type StorageObjectMap = {
  appSession: {
    name: string;
    email: string;
    roleId: string;
    department: string;
    token: string;
  };
};

export type StorageObjectType = 'appSession';

export type StorageObjectData<T extends StorageObjectType> = {
  type: T;
  data: StorageObjectMap[T];
};
